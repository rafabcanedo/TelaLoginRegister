import React, { useContext } from 'react';
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common';
import { Marginer } from '../marginer';
import { AccountContext } from './accountContext';

export function LoginForm(props) {

    const { switchToSignup } = useContext(AccountContext);

    return (
    <BoxContainer>
        <FormContainer>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Senha" />
        </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">Esqueceu sua senha?</MutedLink>
            <Marginer direction="vertical" margin="1.5em" />
            <SubmitButton type="submit">Entrar</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
             Não Tem uma conta?{" "}
            <BoldLink href="#" onClick={switchToSignup}>
                Criar uma conta
            </BoldLink>
            </MutedLink>
    </BoxContainer>
    );
}