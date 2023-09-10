import css from "./Post.module.css";

const Post = ({post}) => {
    const {id, title, description, text} = post;
    return (
        <div className={css.Post}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>description: {description}</div>
            <div>text: {text}</div>
        </div>
    );
};

export {Post};