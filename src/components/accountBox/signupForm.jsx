import React, { useContext } from 'react';
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common';
import { Marginer } from '../marginer';
import { AccountContext } from './accountContext';

export function SignupForm(props) {

    const { switchToSignin } = useContext(AccountContext);

    return (
    <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="Nome Completo" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Senha" />
            <Input type="password" placeholder="Confirmar Senha" />
        </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <Marginer direction="vertical" margin="1.5em" />
            <SubmitButton type="submit">Entrar</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
             Já possui uma conta?{" "}
            <BoldLink href="#" onClick={switchToSignin}>
              Entrar
            </BoldLink>
            </MutedLink>
    </BoxContainer>
    );
}