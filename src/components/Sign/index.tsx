import React, { FormEvent, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './styles.css';
import { Button } from '@material-ui/core';
import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Sign() {
    const classes = useStyles();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [cpf, setCpf] = useState('');

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        api.post('cadastro', {
            name,
            avatar,
            cpf
        })
    }

    return (
        <div className="form-display">
            <form 
                className={classes.root} 
                autoComplete="off"
            >
                <TextField 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    id="standard-basic" 
                    label="Nome" />
                <TextField 
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                    id="standard-basic" 
                    label="URL da Foto" />
                <TextField 
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    id="standard-basic" 
                    label="CPF/CNPJ" />
            </form>
            <Button onClick={handleSubmit} variant="contained" color="primary">
                Enviar
            </Button>
        </div>
    );
}
