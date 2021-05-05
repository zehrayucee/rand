import React, { Component } from 'react'
import Layout from "../../partials/layout";
import { instance } from "../../api/axios";
import { Warn } from '../../components/warn'
import Cookies from 'js-cookie';
import swal from 'sweetalert'
export default class companyEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            username: "",
            email: "",
            isAdmin: false,
            loading: true,
            error: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        let id = this.props.match.params.id; //id  degeri match.params ile almaya çalışır.
        this.setState({
            id: id
        })
        //????????
        let $this = this;
        instance.get("/CompanyUsers/" + id + "?companyId=" + Cookies.get("CompanyId"), {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get("Token")
            }
        }).then(function (res) {
            const { company_user_name, company_user_mail, company_user_password, is_admin } = res.aa;
            $this.setState({
                username: company_user_name,
                email: company_user_mail,
                password: company_user_password,
                isAdmin: is_admin,
                loading: false
            })
        })
            .catch(function (err) {
                $this.setState({
                    error: true
                })
            });
    }
    onChangeHandle(key) {
        return e => {
            this.setState({
                [key]: e.target.value
            });
        }
    }
    handleSubmit() {
        const unNullable = () => {
            swal("Lütfen Tüm Kutuları Doldurun", {
                title: 'Uyarı',
                icon: "warning",
                buttons: false,
                timer: 3000,
            });
        }
        if (this.state.email !== "") {
            if (this.state.username !== "") {
                if (this.state.password !== "") {
                    var $this = this;
                    instance.post("UpdateCompanyUser?id=" + $this.state.id,
                        {
                            company_id: Cookies.get("CompanyId"),
                            company_user_id: $this.state.id,
                            company_user_name: $this.state.username,
                            company_user_password: $this.state.password,
                            company_user_mail: $this.state.email,
                            is_admin: $this.isAdmin,
                        }, {
                        headers: {
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization': 'Bearer ' + Cookies.get("Token")
                        },

                    }
                    ).then(data => {
                        $this.props.history.push("/CompanyUser")
                        swal("Başarılı", {
                            icon: "success",
                            buttons: false,
                            timer: 3000,
                        });
                    }).catch(err => {
                        if (err == "Error: Request failed with status code 401") {
                            return $this.props.history.push("/logout");
                        }
                        swal("Bir Sorun Oluştu", {
                            title: 'Oops...',
                            icon: "error",
                            buttons: false,
                            timer: 3000,
                        });
                    })
                } else {
                    unNullable();
                }
            } else {
                unNullable();
            }
        } else {
            unNullable();

        }

    }
    render() {
        return (
            <Layout>
                <div className="card shadow mb-4">
                    <div className="card-header d-flex py-3">
                        <h6 className="mx-0 font-weight-bold text-primary my-auto">Kullanıcı Düzenle</h6>
                        <button onClick={this.handleSubmit} className="ml-auto btn btn-outline-success">Kaydet</button>
                    </div>
                    <div className="card-body">
                        {
                            this.state.error === false ?
                                this.state.loading === true ? (<div id="pageLoading"></div>) : (
                                    <form action="">
                                        <input type="hidden" name='id' value={this.state.id} />
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="">Kullanıcı Adı</label>
                                                <input type="text" name="name" placeholder="Kullanıcı Adı" value={this.state.username} className="form-control" onChange={this.onChangeHandle("username")} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="">E-Posta Adresi</label>
                                                <input type="text" name="phone" placeholder="E-Posta Adresi" className="form-control" value={this.state.email} onChange={this.onChangeHandle("email")} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="">Şifre</label>
                                                <input type="password" name="password" placeholder="Şifre" className="form-control" value={this.state.password} onChange={this.onChangeHandle("password")} />
                                            </div>
                                            {/* is admin ekle  */}
                                        </div>
                                    </form>
                                ) :
                                (<Warn />)
                        }
                    </div>
                </div>
            </Layout>
        );
    }
}
