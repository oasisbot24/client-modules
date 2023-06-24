import { Notification, nativeImage } from "electron"
import path from 'path';

function showNotification (title : string, body : string) {
  const icon = nativeImage.createFromPath(path.join(__dirname, '../../../icon/icon.png'));
  new Notification({ title: title, icon: icon, body: body }).show();
  console.log("Notification: " + title + " - " + body );
}

export default showNotification;