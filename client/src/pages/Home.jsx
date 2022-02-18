import Card from "../components/Card";
import { posts } from "../data";
import axios from "axios";
import { useEffect, useState, Fragment } from "react";

const Home = () => {
  const api = () => {
    axios
      .get(
        "https://public.opendatasoft.com/api/v2/catalog/datasets?select=%2A&limit=10&offset=0&timezone=UTC"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // navigation

  const [searchTerm, setSearchTerm] = useState("");

  // api event
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&rows=50&facet=tags&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&facet=updated_at&facet=city_district"
      );

      const res = result.data.records;
      setData(res);
    };
    fetchData();
  }, []);
  console.log("data", data);
  return (
    <div className="home">
      <div className="search">
        <input
          type="text"
          placeholder="SEARCH"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <button onClick={api}>click</button>

      {data
        .filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.fields.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((item) => (
          <Card key={item.id} item={item} />
        ))}
    </div>
  );
};

export default Home;
