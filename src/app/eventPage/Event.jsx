import EventElements from "./EventElement";
import { Link } from "react-router-dom";

const Event = () => {
    const Element = EventElements();
    return <>
        <main className="event-main">
            <article>
                <div className="text-box">
                    <i className="xi-central-signal" />
                    <p>온라인</p>
                </div>
                <section className="event-online-wrap">
                    {Element[0]}
                </section>
                <div className="text-box">
                    <i className="xi-group" />
                    <p>오프라인</p>
                </div>
                <section className="event-offline-wrap">
                    {Element[1]}
                </section>
                <Link to="/eventAll">
                    <div className="event-show-all">
                        <p className="event-show-all-text">행사 전체 보기</p>
                        <i className="fa-solid fa-caret-down" />
                    </div>
                </Link>
            </article>
        </main>
    </>
};

export default Event;