import React, { Component } from 'react'
import axios from 'axios';
import {
    Button, Label, Card, Pagination, FormGroup, Input, InputGroupAddon, InputGroupText, InputGroup,
    PaginationItem, PaginationLink, Form, Modal, Container, Row, Col, UncontrolledTooltip, PopoverBody,
    PopoverHeader, UncontrolledPopover, Table,
} from "reactstrap";

export default class randdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            data2: [],
            data3: [],
            data4: [],
            id: "",
            pagex: 1,
            times: false,
            compname: "",
            compstaff: "",
            compuser: "",
            compdate: "",
            comptimerr: "",
            disabled: 1,
            idtt: "",
            name: "",
            lastname: "",
            fathername: "",
            datebird: "",
            email: "",
            addres: "",
            phone: "",
            passw: "",
            passw2: "",
            err: false,
            isvalid: true,
            isvalid2: true
        }
        this.onChangeHandle = this.onChangeHandle.bind(this)
    }

    componentDidMount() {
        var bu = this
        axios.get("http://localhost:3003/company").then(res => {
            bu.setState({
                data: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    mett = (e) => {
        var akt = this;
        var deger = [].slice.call(e.target.children).filter(function (item) { return item.value == e.target.value });
        axios.get("http://localhost:3004/companystaff/" + e.target.value).then(res => {
            akt.setState({
                data2: res.data,
                compname: deger[0].innerText,
            })
        }).catch(err => {
            console.log(err)
        })
    }

    ret = (e) => {
        var ntt = this
        //console.log(e.target)
        var deger1 = [].slice.call(e.target.children).filter(function (item) { return item.value == e.target.value });
        //console.log(deger1[0].innerText)
        axios.get("http://localhost:3005/companyuser/" + e.target.value).then(res => {
            // console.log(res.data)
            ntt.setState({
                data3: res.data,
                page2: 4,
                compstaff: deger1[0].innerText,
            })
            // console.log(ntt.state.data)
        }).catch(err => {
            console.log(err)
        })
    }
    fonk = (e) => {
        this.setState({ page2: 4 })
        var deger2 = [].slice.call(e.target.children).filter(function (item) { return item.value == e.target.value });
        var fonkt = this
        axios.get("http://localhost:3006/companyrundate/" + e.target.value).then(res => {
            fonkt.setState({
                data4: res.data,
                disabled: 2,
                compuser: deger2[0].innerText,
            })
        }).catch(err => {
            console.log(err)
        })
    }

    submithandle = () => {
        if (this.state.compname != "") {
            if (this.state.compstaff != "") {
                document.getElementById("inputcompname").classList.remove("is-invalid");
                document.getElementById("inputcompstaff").classList.remove("is-invalid");
                if (this.state.compuser != "") {
                    document.getElementById("inputcompuser").classList.remove("is-invalid");
                    this.setState({ pagex: this.state.pagex + 1, })
                }
                else {
                    document.getElementById("inputcompuser").classList.add("is-invalid");
                }
            }
            else {
                document.getElementById("inputcompstaff").classList.add("is-invalid");
                document.getElementById("inputcompuser").classList.add("is-invalid");
            }
        }
        else {
            document.getElementById("inputcompname").classList.add("is-invalid");
            document.getElementById("inputcompstaff").classList.add("is-invalid");
            document.getElementById("inputcompuser").classList.add("is-invalid");
        }
    }

    handledate = () => {
        if (this.state.compdate != "") {
            if (this.state.comptimerr != "") {
                this.setState({ pagex: this.state.pagex + 1, })
            }
            else {
                this.setState({ isvalid: false, isvalid2: true })
            }
        }
        else {
            this.setState({ isvalid: true })
        }
    }

    onClickhandlee = (e) => {
        var id = e.target.dataset.id;//button data-id deger ataması
        var array = this.state.data4[id];
        var deger4 = e.target.innerText;
        this.setState({ comptimerr: '', isvalid: false })
        this.setState({ times: array, compdate: deger4, page: 5 })
        var arr = [].slice.call(document.getElementsByClassName("hyy"))
        arr.map(item => {
            item.classList.remove("active")
            var arr = [].slice.call(document.getElementsByClassName("tuu"))
            arr.map(item => {
                item.classList.remove("active")
            })
        })
        e.target.classList.add("active")
    }

    show = (e) => {
        var deger5 = e.target.innerText;
        this.setState({ comptimerr: deger5, disabled: 1, isvalid2: false })
        var arr = [].slice.call(document.getElementsByClassName("tuu"))
        arr.map(item => {
            item.classList.remove("active")
        })
        e.target.classList.add("active")
    }

    handlesubmitless = () => {
        this.setState({ pagex: this.state.pagex - 1 })
    }


    handlepp = () => {
        var form1 = document.getElementsByClassName("form1")[2];
        this.setState({ stt: 0 });
        [].slice.call(form1.getElementsByTagName("input")).map((item, count) => {
            var valid = form1.getElementsByClassName("is-invalid");
            if (valid.length == 0) {
                this.setState({ pagex: this.state.pagex + 1, })
            }
        })
    }

    onChangeHandle(key) {
        var form1 = document.getElementsByClassName("form1")[2];
        if (form1 != undefined) {
            var disabled = false;
            [].slice.call(form1.getElementsByTagName("input")).map((item, count) => {
                if (item.value == "") {
                    item.classList.add("is-invalid");
                }
                else {
                    if (this.state.passw == this.state.passw2) {
                        item.classList.remove("is-invalid");
                        item.classList.add("is-valid");
                    }
                    else {
                        document.getElementById("inputdeneme").classList.add("is-invalid");
                    }

                }
            })
            return e => {
                this.setState({
                    [key]: e.target.value,
                })
            }
        }
    }

    submitt = (user) => {
        var bu = this
        axios.post("http://localhost:3001/customer", {
            idtt: this.state.idtt,
            name: this.state.name,
            lastname: this.state.lastname,
            datebird: this.state.datebird,
            email: this.state.email,
            addres: this.state.addres,
            phone: this.state.phone,
            passw2: this.state.passw2,
            compname: this.state.compname,
            compstaff: this.state.compstaff,
            compuser: this.state.compuser,
            compdate: this.state.compdate,
            comptimerr: this.state.comptimerr
        })
            .then(res => {
                //console.log(res);
                console.log("başarılı");
                alert("Kayıt işleminiz gerçekleşmiştir.")
            }).catch(err => {
                console.log(err);
                console.log("başarısız");
                alert("Kayıt işlemi başarısız... Lütfen tekrar deneyiniz!")
            })
    }

    render() {
        return (
            <div>
                <div className="Container" >
                    <div className="Row">

                        <div className="bir  ">

                            <div className="cardt df"  >
                            
                                <div className="as1" >
                                ds
                                </div>
                                <div className="as2">
                                asz
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
