

export default function Contact () {

    return (
        <>
        <h2>Contact</h2>
        <form>
            <label for="name">Name: </label>
            <input type="text" id="nameInput" name="name"></input>
            <br></br>
            <label for="email">Email: </label>
            <input type="email" id="emailInput" name="email"></input>
            <br></br>
            <label for="message">Message: </label>
            <br></br>
            <textarea id="messageInput" rows="4" cols="50"></textarea>
            <br></br>
            <input type="submit" value="Submit"></input>
        </form>
        </>
    )
}