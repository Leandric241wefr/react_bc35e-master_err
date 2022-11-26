import { func } from "prop-types";
import { Component } from "react";

export default class FormCreateProduct extends Component {

    state = {
        value: {
            id: '',
            name: '',
            price: '',
            productType: '',
            image: '',
            description: ''
        },
        errors: {
            id: '',
            name: '',
            price: '',
            productType: '',
            image: '',
            description: '',
        },
        inValid: true
    }

    checkValid = () => {
        let valid = true;
        let { errors } = this.state.value;
        for (let key in values) {
            if (errors[key] !== '' || values[key] == '') {
            }
        }
        return true;
    }


    handleInputChange = (e) => {
        //Lấy ra id và value của thẻ đang onInput
        let { value, id } = e.target;

        let dataAttrRegex = e.target.getAttribute
            ('data-regex');
        console.log('dataRegex', dataAttrRegex)

        //Sử lý value
        let newValue = this.state.values;
        newValue[id] = value;

        //Xử lý errors
        let newErrors = this.state.errors;
        let messError = '';
        if (value.trim() == '') {
            messError = id + 'cannot be blank';
        } else {
            if (type === 'number') {
                let regexNumber = /^\d+$/;
                if (!regex.test(value)) {
                    messError = id + 'is invalid';
                }
            }

            newErrors[id] = messError;

            //Cập nhất state
            this.setState({
                value: newValue,
                errors: newErrors
            }, () => {
                // console.log(this.state)

                let valid = !this.checkValid();
                this.setState({
                    valid: valid
                })
            })
        }
    }
    //     let(id, value) = e.target;
    //     this.setStat({

    //         [id]: value
    //     }, () => {
    //         console.log(this.state);
    //     })


    // }
    handlesubmit = (e) => {
        e.preventDefault();
        console.log('abc');
        return;

    }

    render() {
        return (
            <form className='container' onSubmit={this.handlesubmit}>
                <h3>Create product</h3>
                <div className="card">
                    <h3 className="card-header">Product info</h3>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <p>id</p>
                                    <div className="alert alert-danger mt-2">{this.state.errors.image}</div>
                                </div>
                                <div className="form-group">
                                    <p>name</p>
                                    <input className="form-control" id="name" name="name" onInput={handleInputChange} />
                                    <div className="alert alert-danger mt-2">{this.state.errors.image}</div>
                                </div>
                                <div className="form-group">
                                    <p>price</p>
                                </div>

                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <p>image</p>
                                    <input className="form-control" id="image" name="image" onInput={handleInputChange} />
                                    <div className="alert alert-danger mt-2">{this.state.errors.image}</div>
                                </div>

                                <div className="form-group">
                                    <p>productType</p>
                                    <select className="form-group" id="productType">
                                        <option value={"phone"}>phone</option>
                                        <option value={"tablet"}>tablet</option>
                                        <option value={"laptop"}>laptop</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <p>description</p>
                                    <input className="form-control" id="description" name="description" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-success m-2" disabled={this.state.inValid}>Create</button>
                    </div>
                </div>
            </form>
        )
    }
}

