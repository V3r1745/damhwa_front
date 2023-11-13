import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ProElement from "./ProElement";

const Clean = () => {
  const context = useOutletContext();
  const [fetchElement, setFetchElement] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios.get(
        `/pro?type=5&page=${context.location.at(-1)}`
      );
      console.log(result.data);
      setFetchElement([...result.data]);
    })();
  }, [context]);

  return (
    <section className="pro-section">
      {fetchElement.map((v) => {
        return (
          <ProElement
            key={v.pk}
            id={v.pk}
            location={location.href}
            price={v.fields.product_price}
            title={v.fields.product_title}
            img={v.fields.product_main_img}
          />
        );
      })}
    </section>
  );
};

export default Clean;
