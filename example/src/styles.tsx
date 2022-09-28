import { StyleSheet } from 'react-native';
import { scale, wScale, hScale, RFValue } from 'd4dpocket';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: RFValue(16),
  },
  wScale: {
    width: wScale(50),
    height: wScale(50),
    backgroundColor: '#51a1c4',
  },
  hScale: {
    width: hScale(50),
    height: hScale(50),
    backgroundColor: '#51a1c4',
  },
  scale: {
    width: wScale(50),
    height: wScale(50),
    borderRadius: scale(50),
    marginRight: scale(10),
    backgroundColor: '#51a1c4',
  },
  button: {
    backgroundColor: '#51a1c4',
    paddingVertical: scale(8),
    paddingHorizontal: scale(25),
    borderRadius: scale(5),
  },
});
