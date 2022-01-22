import axios from "axios";
import React from "react";
import swal from "sweetalert";

const Cliente = () => {

    const [errors, setErrors] = React.useState({});
    const [data, setData] = React.useState({
        tipoD:'',
        numD:'',
        name: '', 
        direccion: '',
        distrito: '',
        telefono: '',
        celular: '',
        email: '',
        error_lis: []
    });

    const handleValidation = () =>{
        let errors = {};
        let formIsvalid = true;

        if(!data.name) { 
            formIsvalid = false; 
            errors['name'] = 'name is required';
        }
        if(!data.direccion) { 
            formIsvalid = false; 
            errors['direccion'] = 'direccion is required';
        }
        if(!data.distrito) { 
            formIsvalid = false; 
            errors['distrito'] = 'distrito is required';
        }
        if(!data.numD) { 
            formIsvalid = false; 
            errors['numD'] = 'documento is required';
        }
        if(!data.email) { 
            formIsvalid = false; 
            errors['email'] = 'email is required';
        }

        setErrors(errors);
        return formIsvalid;
    }

    const handleChange =  (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const submitCategory = (e) => {
        e.preventDefault();

        console.log(data)

       if (handleValidation()) {
           console.log(data)
            axios.post(`/api/register`, data).then((res) => {
                if(res.data.status === 200){
                    swal("success", res.data.message, 'success');
                    document.getElementById('slug').value = "";
                    document.getElementById('name').value = "";
                    document.getElementById('description').value = "";
                    document.getElementById('meta_title').value = "";
                    document.getElementById('meta_keyword').value = "";
                    document.getElementById('meta_description').value = "";
                }else if (res.data.status === 404){
                   swal("warning", res.data.error, 'warning');
                }
            })
       }
    }

    return (

        <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header" >
                                <h4>Formulario</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitCategory} id="category_form">

                                <div className="tab-content" id="myTabContent">

                                    <div className="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row g-3">
                                            <div className="col-md-4">
                                                <label className="form-label">Tipo</label>
                                                <select id="inputState" className="form-select" name="tipoD" onChange={handleChange}>
                                                <option value={'dni'}>DNI</option>
                                                <option value={'rut'}>RUC</option>
                                                <option value={'CE'}>CE</option>
                                                <option value={'pasaporte'}>Pasaporte</option>
                                                </select>
                                            </div>
                                            <div className="col-md-8">
                                                <label  className="form-label">Documento</label>
                                                <input type="number" id="numD" name="numD" value={data.numD} onChange={handleChange} className="form-control"/>
                                                <span className="text-danger">{errors['numD']}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="from-group mb-3">
                                            <label>Name</label>
                                            <input type='text' id="name" name='name' onChange={handleChange} value={data.name} className="form-control"/>
                                            <span className="text-danger">{errors['name']}</span>
                                        </div>
                                        <div className="row g-3">
                                            <div className="from-group mb-3 col">
                                                <label>Direccion</label>
                                                <input type='text' id="direccion" name='direccion'  onChange={handleChange} value={data.direccion} className="form-control"/>
                                                <span className="text-danger">{errors['direccion']}</span>
                                            </div>
                                            <div className="from-group mb-3 col">
                                                <label>Distrito</label>
                                                <input type='text' id="distrito" name='distrito'  onChange={handleChange} value={data.distrito} className="form-control"/>
                                                <span className="text-danger">{errors['distrito']}</span>
                                            </div>
                                        </div>

                                        <div className="row g-3">
                                            <div className="from-group mb-3 col-6">
                                                <label>Email</label>
                                                <input type='text' id="email" name='email'  onChange={handleChange} value={data.email} className="form-control"/>
                                                <span className="text-danger">{errors['email']}</span>
                                            </div>
                                            <div className="from-group mb-3 col-3">
                                                <label>Telefono</label>
                                                <input type='number' id="telefono" name='telefono'  onChange={handleChange} value={data.telefono} className="form-control"/>
                                                <span className="text-danger">{errors['telefono']}</span>
                                            </div>
                                            <div className="from-group mb-3 col-3">
                                                <label>Celular</label>
                                                <input type='number' id="celular" name='celular'  onChange={handleChange} value={data.celular} className="form-control"/>
                                                <span className="text-danger">{errors['celular']}</span>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <button type="submit" className="btn btn-primary mt-2 ">Enviar</button>

                                </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            
    )
}
export default Cliente;