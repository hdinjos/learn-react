import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState([{ name: "hendi", age: 34 }]);
  const [val, setVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([
    {
      id: "",
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    },
  ]);
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
        setLoading(false);
      });
  }, []);

  const evaluate = () => {
    setName((state) => [...state, { name: val, age: 20 }]);
  };

  const style = {
    button: {
      paddingTop: "10px",
    },
    listName: {
      marginLeft: "20px",
      backgroundColor: "blue",
      color: "white",
      width: "300px",
      fontWeight: 900,
      paddingLeft: "50px",
      // paddingRight: "20px",
    },
  };

  return (
    <div>
      <input
        value={val}
        type="text"
        onChange={(e) => setVal(e.target.value)}
        placeholder="inputan"
      />
      <p>hasilnya {val}</p>
      <div style={style.button}>
        <button onClick={evaluate}>Tambah Nama</button>
      </div>
      <h2>Daftar nama</h2>
      {name.map((item, i) => {
        return (
          // <div key={i}>{item.age ? <p>Muncul</p> : <p>Tidak Muncul</p>}</div>
          <div style={style.listName} key={i}>
            {item.name}
          </div>
        );
      })}
      <h4>Hasil user dari jsonplaceholder</h4>

      {(() => {
        if (loading) {
          return <h4>Loading...</h4>;
        } else {
          return (
            <div>
              {user.map((item) => {
                return (
                  <ul key={item.id}>
                    <li>{item.name}</li>
                  </ul>
                );
              })}
            </div>
          );
        }
      })()}
    </div>
  );
}

export default App;
