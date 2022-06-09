import { useRef, useState } from "react";
import { Context, useContext } from "./context";

import css from "../styles/createEntry.module.css"

export default function CreateEntry() {
    let [state, setState] = useContext(Context);

    let [success, setSuccess] = useState(false);
    let [animate, setAnimate] = useState(false);

    let textarea = useRef();
    let input = useRef();

    function handlePost() {
        let [title, context] = [input?.current.value, textarea?.current.value];
        if (title?.length <= 0 || context?.length <= 0) return;

        fetch(`/api/collection/entries?token=${state.token}`, {
            method: "POST",
            body: JSON.stringify({ title, context }),
        })

        setSuccess(true);

        setTimeout(() => {
            setAnimate(true);

            setTimeout(() => {
                setSuccess(false);
                setAnimate(false);
            }, 2000)

        }, 1000)
    }

    return <div className={css.createEntry}>
        <div className={css.container}>
            <div className={css.textContainer}>
                <input
                    type="text"
                    placeholder="Add title.."
                    className={css.input}
                    ref={input} />
                <textarea
                    type="text"
                    placeholder="Add a context.."
                    className={css.textarea}
                    ref={textarea} />
            </div>
            <button onClick={handlePost} className={css.button}>Post</button>
        </div>

        {
            success && <span className={[css.success, animate && css.animate, css.notification].join(" ")}>Successfully created!</span>
        }

    </div>
}