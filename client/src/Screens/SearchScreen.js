import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listProducts } from '../actions/productsActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
import Rating from '../components/Rating';
import { prices, ratings } from '../utils/utils';
function SearchScreen(props) {
    
    const {
        name = 'all',
        category = 'all',
        min = 0,
        max = 0,
        rating = 0,
        order = 'newest',
        pageNumber = 1
    } = useParams()
    const dispatch = useDispatch()
    const productList = useSelector((state)=> state.productList)
    const { loading, error, products, page, pages } = productList

    const productCategoryList = useSelector((state)=> state.productCategoryList)
    const {
        loading: loadingCategories,
        error: errorCategories,
        categories,
    } = productCategoryList

    useEffect(()=>{
        dispatch(
            listProducts({
                pageNumber,
                name: name !== 'all' ? name : '',
                category: category !== 'all' ? category : '',
                min,
                max,
                rating,
                order
            })
        )
    },[category, dispatch, max, min, name, order, pageNumber, rating])

    const getFilterUrl = (filter) => {
        const filterPage = filter.page || pageNumber
        const filterCategory = filter.category || category
        const filterName = filter.name || name
        const filterRating = filter.rating || rating
        const sortOrder = filter.order || order
        const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min
        const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max
        return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}/pageNumber/${filterPage}`;
    }

    const cleanFilter = ()=>{
        return `/search/category/all/name/all/min/0/max/0/rating/all/order/all/pageNumber/1`;
    }

    return (
        <div>
            <div className="row">
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <div className="flex center space-1">
                    <div>{products.length} resultados</div>
                        <div className='chip'>
                            <Link to={cleanFilter}>
                                Limpar
                            </Link>
                        </div>
                    </div>
                )}
                <div>
                    Ordenado por {' '}
                    <select
                        value={order}
                        onChange={(e)=>{
                            props.history.push(getFilterUrl({order: e.target.value}))
                        }}
                    >
                        <option value="newest">Novidades</option>
                        <option value="highest">Preço: alto</option>
                        <option value="lowest">Preço: baixo</option>
                        <option value="toprated">Média de reviews</option>
                    </select>
                </div>
            </div>
            <div className="row top">
                <div className="col-1 paper filters-panel">
                    <div className="pb-1">
                        <h3 className="highlight">Departamento</h3>
                        {loadingCategories ? (
                            <LoadingBox />
                        ) : errorCategories ? (
                            <MessageBox variant="danger">{errorCategories}</MessageBox>
                        ) : (
                            <ul>
                                <li>
                                    <Link
                                        className={'all' === category ? 'active' : ''}
                                        to={getFilterUrl({category: 'all'})}
                                    >
                                        Todos
                                    </Link>
                                </li>
                                    {categories.map((c)=>(
                                        <li key={c}>
                                            <Link
                                                className={c === category ? 'active' : ''}
                                                to={getFilterUrl({category: c})}
                                            >
                                                {c}
                                            </Link>
                                        </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="pb-1">
                        <h3 className="highlight">Preço</h3>
                        <ul>
                            {prices.map((p)=> (
                                <li key={p.name}>
                                    <Link
                                        to={getFilterUrl({min:p.min, max: p.max})}
                                        className={
                                            `${p.min}-${p.max}` === `${min}-${max}` ?  'active' : ''
                                        }
                                    >
                                        {p.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="highlight">Média de reviews</h3>
                        <ul>
                            {ratings.map((r,i)=>(
                                <li key={i} >
                                    <Link
                                        to={getFilterUrl({rating: r.rating})}
                                        className={`${r.rating}` === `${rating}` ? 'active' : ''}
                
                                    >
                                        <Rating showNumReviews={false} rating={r.rating}/> e acima 
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-3">
                    {
                        loading ? (
                            <LoadingBox />
                        ) : error ? (
                            <MessageBox variant="danger">{error}</MessageBox>
                        ): (
                            <>
                                {products.length === 0 && (
                                    <MessageBox>Nenhum produto encontrado!</MessageBox>
                                )}
                                <div className="row center">
                                    {products.map((product)=> (
                                        <Product key={product._id} product={product} />                                    ))}
                                </div>
                                <div className="row center pagination">
                                    {[...Array(pages).keys()].map((x)=>(
                                        <Link
                                            className={x + 1 === page ? 'active' : ''}
                                            key={x+1}
                                            to={getFilterUrl({page: x + 1})}
                                        >
                                            {x + 1}
                                        </Link>
                                    ) )}
                                </div>
                            </>
                        )}
                </div>
            </div>
        </div>
    )
}

export default SearchScreen