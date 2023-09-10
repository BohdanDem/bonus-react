import {useRef, useState} from "react";

import {Posts} from "../Posts/Posts";
import {posts as data} from "../../data";
import css from "./Carousel.module.css";

const Carousel = () => {
    const [posts, setPosts] = useState(data)
    const [currentPosition, setCurrentPosition] = useState(0)

    const step = 900
    const size = posts.length * 300 - step
    const postsRef = useRef();

    const right = () => {
        setCurrentPosition(prev => {
            if (currentPosition < size) {
                const position = prev + step;
                postsRef.current.style.marginLeft = `-${position}px`
                return position
            }
            return prev
        })

    }
    const left = () => {
        setCurrentPosition(prev => {
            if (currentPosition > 0) {
                const position = prev - step;
                postsRef.current.style.marginLeft = `-${position}px`
                return position
            }
            return prev
        })
    }
    return (
        <div className={css.Carousel}>
            <div className={css.arrow} onClick={left}>{'<'}</div>
            <div className={css.slide}>
                <Posts posts={posts} postsRef={postsRef}/>
            </div>
            <div className={css.arrow} onClick={right}>{'>'}</div>
        </div>
    );
};

export {Carousel};