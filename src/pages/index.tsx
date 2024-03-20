import Head from 'next/head';
import Image from 'next/image';
import {
  MainContainer,
  ContentContainer,
  Header,
  LogoContainer,
  Footer,
  Title,
  Icon,
  LinkedIn,
  ContentHeader,
} from '../styles/pages/Home';
import { FaLinkedinIn } from 'react-icons/fa';
import UserList from '../components/user/UserList';
import Dialog from '../components/dialog';
import UserForm from '../components/user/UserForm';
import { useMutateNewUser } from '../hooks/useUserMutate';

export default function Home() {
  const { mutateAsyncSubmit } = useMutateNewUser();

  return (
    <MainContainer>
      <Head>
        <title>Desafio Frontend - Onyma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <LogoContainer>
          <Image
            alt="Logo da Onyma by Bencorp"
            src="/assets/Logo Onyma by Bencorp.svg"
            width="88px"
            height="53.59px"
            layout="intrinsic"
          />
        </LogoContainer>
      </Header>

      <ContentContainer>
        <ContentHeader>
          <Dialog
            title="Novo Usuário"
            openButtonLabel="Novo Usuário"
            closeButtonLabel="Fechar"
          >
            <UserForm onSubmit={mutateAsyncSubmit} />
          </Dialog>
        </ContentHeader>

        <UserList />
      </ContentContainer>

      <Footer>
        <p>
          Feito com
          <Icon>
            <Image
              alt="Coração violeta"
              src="/assets/Blob footer.svg"
              width="16px"
              height="10px"
            />
          </Icon>
          pela Onyma
        </p>
        <LinkedIn
          href="https://www.linkedin.com/company/onymadigital/mycompany/"
          target="_blank"
        >
          <FaLinkedinIn />
        </LinkedIn>
      </Footer>
    </MainContainer>
  );
}
