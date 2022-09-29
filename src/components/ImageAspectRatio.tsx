import React, { useState, useEffect } from 'react';
import { Image, ImageProps, ImageURISource, StyleSheet } from 'react-native';

type IProps = {
  source: ImageURISource;
} & ImageProps;

const ImageAspectRatio = ({ source, style, ...rest }: IProps) => {
  const [aspectRatio, setAspectRatio] = useState(1);
  const [isError, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  useEffect(() => {
    if (source && source.uri) {
      Image.getSize(source.uri, (width, height) => {
        setAspectRatio(width / height);
      });
    }
  }, []);

  return (
    <Image
      {...rest}
      source={source}
      style={[{ aspectRatio }, isError && styles.error, style]}
      onError={onError}
    />
  );
};

const styles = StyleSheet.create({
  error: {
    backgroundColor: 'grey',
  },
});

export default ImageAspectRatio;