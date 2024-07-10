// ! this service can be use in any react native project just go to the Index.js
// ! import this service file and TrackPlayer library
// ! add Trackplayer.TrackPlayer.registerPlaybackService(() =>services.js);
import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';
import {playListData} from './src/constants';

export async function setupPlayer() {
  let isSetup = false;
  try {
    // await TrackPlayer.getCurrentTrack();
    await TrackPlayer.getActiveTrack();
    isSetup = true;
  } catch (error) {
    await TrackPlayer.setupPlayer();
    isSetup = true;
  } finally {
    return isSetup;
  }
}

export async function addTrack() {
  await TrackPlayer.add(playListData);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export async function plalyBackService() {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });
  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });
  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();
  });
  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });
}
