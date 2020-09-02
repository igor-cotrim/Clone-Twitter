import React from 'react';

import { 
    Container, 
    Retweeted,
    RetweetIc, 
    Body, 
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon, 
    LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              <RetweetIc/>
              Você retweetou
          </Retweeted>

          <Body>
              <Avatar/>

              <Content>
                  <Header>
                      <strong>Igor Cotrim</strong>
                      <span>@igorcotrim_</span>
                      <Dot/>
                      <time>27 de jun</time>
                  </Header>

                  <Description>Foquete não da ré </Description>

                  <ImageContent/>

                  <Icons>
                      <Status>
                          <CommentIcon/>
                          6
                      </Status>
                      <Status>
                          <RetweetIcon/>
                          6
                      </Status>
                      <Status>
                          <LikeIcon/>
                          99
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  )
}

export default Tweet;