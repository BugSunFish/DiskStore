import {Component} from "react";

export class SignForm extends Component {
    render() {
        return (2
            <div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <h3>Логин</h3>
                                    <input/>
                                    <br/>
                                    <h3>Пароль</h3>
                                    <input/><br/>
                                    <button type={`button`} className={`btn m-1 text-white bg-primary`}>In</button>
                                    <button type={`button`} className={`btn m-1 text-white bg-primary`}>Up</button>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}