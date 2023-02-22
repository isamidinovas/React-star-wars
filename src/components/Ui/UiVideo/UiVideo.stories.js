import UiVideo from "./UiVideo";
import video from "./video/video.mp4";

export default {
  title: "Ui-kit/UiVideo",
  component: UiVideo,
};
const Templete = (args) => <UiVideo {...args} />;
const props = {
  src: video,
  classes: "",
  playbackRate: 1.0,
};

export const Default = Templete.bind({});
Default.args = {
  ...props,
};
