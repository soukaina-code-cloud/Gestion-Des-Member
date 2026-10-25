
  import { useState } from "react";

export default function App() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cin, setCin] = useState("");
  const [sexe, setSexe] = useState("");
  const [langues, setLangues] = useState([]);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState("");

  function handleCheckbox(e) {
    if (e.target.checked) {
      setLangues([...langues, e.target.value]);
    } else {
      setLangues(langues.filter((l) => l !== e.target.value));
    }
  }

  function afficher(e) {
    e.preventDefault();

    console.log({
      nom,
      email,
      password,
      cin,
      sexe,
      langues,
      file,
      image,
    });
  }

  return (
    <div>
      <h1>Formulaire React</h1>

      <form onSubmit={afficher}>

        <label>Nom :</label><br />
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <br /><br />

        <label>Email :</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <label>Password :</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <label>CIN :</label><br />
        <input
          type="text"
          value={cin}
          onChange={(e) => setCin(e.target.value)}
        />
        <br /><br />

        <label>Sexe :</label><br />
        <input
          type="radio"
          name="sexe"
          value="Homme"
          onChange={(e) => setSexe(e.target.value)}
        /> Homme

        <input
          type="radio"
          name="sexe"
          value="Femme"
          onChange={(e) => setSexe(e.target.value)}
        /> Femme

        <br /><br />

        <label>Langages :</label><br />

        <input
          type="checkbox"
          value="HTML"
          onChange={handleCheckbox}
        /> HTML

        <input
          type="checkbox"
          value="CSS"
          onChange={handleCheckbox}
        /> CSS

        <input
          type="checkbox"
          value="React"
          onChange={handleCheckbox}
        /> React

        <br /><br />

        <label>Fichier :</label><br />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br /><br />

        <label>Image (URL) :</label><br />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <br /><br />

        <button type="submit">Envoyer</button>

      </form>

      <hr />

      <h2>Résultat</h2>

      <p><b>Nom :</b> {nom}</p>
      <p><b>Email :</b> {email}</p>
      <p><b>Password :</b> {password}</p>
      <p><b>CIN :</b> {cin}</p>
      <p><b>Sexe :</b> {sexe}</p>
      <p><b>Langages :</b> {langues.join(", ")}</p>
      <p><b>Fichier :</b> {file ? file.name : ""}</p>

      {image && (
        <img src={image} alt="img" width="150" />
      )}
    </div>
  );
}
  





