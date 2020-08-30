import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg'

import { 
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
  List,
 } from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail}/>

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>obrenoco</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Font-end com Nex.js, Chackra UI e GraphQL
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science and Technology
          </StreamCategory>
        </StreamRow>

      <TagRow>
        <TagView>
          <TagText>Portuguese</TagText>
        </TagView>
        <TagView>
          <TagText>Web DeVelopment</TagText>
        </TagView>
      </TagRow>

      </StreamColumn>
    </StreamContainer>
  )

  return (
      <List>
        <StreamItem />
        <StreamItem />
        <StreamItem />
        <StreamItem />
      </List>
  );
};

export default StreamList;
