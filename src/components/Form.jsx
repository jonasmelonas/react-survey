import { useState } from "react"

const Form = () => {

    const [data, setData] = useState({
        color: "",
        spendTime: {
            swimming: false,
            bathing: false,
            chatting: false,
            noTime: false
        },
        review: "",
        username: "",
        email: ""
    })
    
    const handleChange = (event) => {
        const {name, value} = event.target

        console.log(event)
        if(event.target.type === "radio") {
            setData({...data, color: event.target.value})
        } 
        else if (event.target.type === "checkbox") {
            setData(prevData => ({
                ...prevData,
                spendTime: {
                    ...prevData.spendTime,
                    [event.target.value]: !prevData.spendTime[event.target.value]
                }
            }))
        }
        else if(event.target.name === "review") {
            setData({...data, review: event.target.value})
        }
        else if(name) {
            setData({...data, [name]: value})
        }
    }

    const handleSubmit = () => {
        setData({
            color: "",
            spendTime: {
                swimming: false,
                bathing: false,
                chatting: false,
                noTime: false
            },
            review: "",
            username: "",
            email: ""
        })
    }

    console.log(data)

    return (
        <form className="form" onChange={handleChange}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                {/* <!-- Radio inputs go here --> */}
                <ul>
                    <li>
                        <input id="color-one" type="radio" name="color" value="1" checked={data.color === "1"} /><label
                        htmlFor="color-one"
                        >1</label>
                    </li>
                    <li>
                        <input id="color-two" type="radio" name="color" value="2" checked={data.color === "2"} />
                        <label
                        htmlFor="color-two">2</label>
                    </li>
                    <li>
                        <input id="color-three" type="radio" name="color" value="3" checked={data.color === "3"} />
                        <label
                        htmlFor="color-three">3</label>
                    </li>
                    <li>
                        <input id="color-four" type="radio" name="color" value="4" checked={data.color === "4"} /><label
                        htmlFor="color-four"
                        >4</label>
                    </li>
                </ul>
            </div>
            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                {/* <!-- checkboxes go here --> */}
                <ul>
                    <li>
                        <label
                        ><input
                            name="spend-time"
                            type="checkbox"
                            value="swimming"
                        />Swimming</label>
                    </li>
                    <li>
                        <label
                        ><input name="spend-time" type="checkbox" value="bathing" checked={data.spendTime.bathing} />Bathing</label>
                    </li>
                    <li>
                        <label
                        ><input
                            name="spend-time"
                            type="checkbox"
                            value="chatting"
                            checked={data.spendTime.chatting}
                        />Chatting</label>
                    </li>
                    <li>
                        <label>
                            <input name="spend-time" type="checkbox" value="noTime" checked={data.spendTime.noTime} />I dont like to
                        spend time with it
                        </label>
                    </li>
                </ul>
            </div>
            <label
                >What else have you got to say about your rubber duck?<textarea
                name="review"
                cols="30"
                rows="10"
                value={data.review}
                ></textarea></label>
            <label>Put your name here (if you feel like it):<input
                type="text"
                name="username"
                value={data.username} /></label>
            <label>Leave us your email pretty please??<input
                type="email"
                name="email"
                value={data.email} /></label>
                <input className="form__submit" type="submit" value="Submit Survey!" onClick={handleSubmit} />
        </form>
    )
}

export default Form