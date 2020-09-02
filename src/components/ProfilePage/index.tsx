import React from 'react';

import Feed from '../Feed'
import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    EditButton, 
    LocationIcon, 
    CakeIcon, 
    Followage, 
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar/>
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar perfil</EditButton>

              <h1>Igor Cotrim</h1>
              <h2>@igorcotrim_</h2>

              <p>
                  Não sei usar essa rede
              </p>

              <ul>
                  <li>
                      <LocationIcon/>
                      Vitoria da Conquista, Brasil
                  </li>
                  <li>
                      <CakeIcon/>
                      Nascido(a) em 27 de junho de 1999
                  </li>
              </ul>

              <Followage>
                  <span>
                      seguindo <strong>94</strong>
                  </span>
                  <span>
                    <strong>94 </strong> seguidores 
                  </span>
              </Followage>
          </ProfileData>

          <Feed/>
      </Container>
  )
}

export default ProfilePage;