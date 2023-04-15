import { useState } from 'react';
import './App.css';

function App() {
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');


    const handleInputChangeEmail = (event) => {
        const { name, value } = event.target;

        const regexEmail = /(?<email>\S+@\S+)\.(?<domain>\S+)\.(?<tld>\w+)/;

        if (name === 'email') {
            const match = value.match(regexEmail);

            if (match) {
                const { email, domain, tld } = match.groups;
                console.log(domain)
                setEmail(`${email}.${domain}.${tld}`);

            } else {
                setEmail(value);
            }

        }
    };

    const handleInputChangeAge = () => {
        const age= document.getElementById("age").value
        const allowAge = age > 0 ? age : (() => { throw new Error('Your age isn`t negative or 0') })();
        const allowAge18 = age > 18 ? age : (() => { throw new Error('You must be 18 or older') })();
        setAge(age)
    }

  return (
    <div className="App">
        <div className="info">
            <h2>Прізвище та ім'я:<br/>Харченко Юлія</h2>
            <h2>Напрямок, за яким планує розвиватись:<br/>React</h2>
            <h2>Персональну сертифікацію, яку планує складати:<br/>React Developer Certification</h2>
            <h3>Аргументація:<br/>Вона оцінює рівень знань та вмінь розробників React.<br/> Це дозволяє розробникам продемонструвати свої знання та навички в рамках React та<br/> допомагає роботодавцям виявляти кваліфікованих кандидатів.<br/>Отримання сертифікації може підвищити цінність як спеціаліста,<br/> оскільки він демонструє вашу експертизу в React та підтверджує,<br/> що ви володієте необхідними навичками та<br/> знаннями для розробки високоякісних додатків на React.</h3>
        </div>
        <div className="form">
            <h1>Перевірка форми</h1>
            <label htmlFor="email">Електронна пошта</label>
            <input id="email" name="email" type="email" value={email} onChange={handleInputChangeEmail} />
            <label htmlFor="age">Ваш вік(старше 18)</label>
            <input id="age" name="age" type="number" />
            <button onClick={handleInputChangeAge}>Перевірка віку</button>
            <br/>
            <label>Отримані дані</label>
            <p>Електронна пошта - {email}</p>
            <p>Ваш вік - {age}</p>
        </div>
    </div>
  );
}

export default App;
