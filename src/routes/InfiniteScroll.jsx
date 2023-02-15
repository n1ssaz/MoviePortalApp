import InfiniteScroll from 'react-infinite-scroll-component';
import MovieGrid from '../components/MovieGrid';
import database from "../../db.json"
import { useState } from 'react';
export default function InfiniteScrollRoute() {

    const [movies, setMovies] = useState(database.movies.slice(0, 20))
    const [count, setCount] = useState(1)
    function getMoreMovies() {
        setCount(count + 1)
        const a = 20 * (count + 1)
        setMovies(database.movies.slice(0, a))
    }
    return (
        <div style={{ marginTop: 79 }}>

            <InfiniteScroll
                dataLength={movies.length}
                next={getMoreMovies}
                hasMore={true}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                {<MovieGrid movies={movies}></MovieGrid>}
            </InfiniteScroll>

        </div>)
}