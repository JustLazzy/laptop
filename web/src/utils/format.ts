import moment from "moment";

export function formatDuration(duration: number) {
  const momentDuration = moment.duration(duration);
  const durationStr = moment
    .utc(momentDuration.as("milliseconds"))
    .format("HH:mm:ss");
  const parts = durationStr.split(":");
  return `${parts[1]}:${parts[0]}`;
}
