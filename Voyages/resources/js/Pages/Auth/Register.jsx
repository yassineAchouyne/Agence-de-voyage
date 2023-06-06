import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import styles from "../../Components/Login/Login.module.css";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        nom: '',
        prenom: '',
        tel: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (

            <form onSubmit={submit} className={styles.body}>
                <div>
                    <InputLabel forInput="nom" value="Nom :" />

                    <TextInput
                        id="nom"
                        name="nom"
                        value={data.nom}
                        className="mt-1 block w-full form-control mt-2"
                        autoComplete="nom"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.nom} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="prenom" value="Prenom :" />

                    <TextInput
                        id="prenom"
                        name="prenom"
                        value={data.prenom}
                        className="mt-1 block w-full form-control mt-2"
                        autoComplete="prenom"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.nom} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="tel" value="Téléphone :" />

                    <TextInput
                        id="tel"
                        name="tel"
                        value={data.tel}
                        className="mt-1 block w-full form-control mt-2"
                        autoComplete="tel"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.nom} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="email" value="Email :" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full form-control mt-2"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="Password :" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full form-control mt-2"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password_confirmation" value="Confirm Password :" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full form-control mt-2"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">

                    <PrimaryButton className="ml-4 btn btn-primary w-100" processing={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
    );
}
