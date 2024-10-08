import { User } from "./components/user";
import { Video } from "./components/video";
export = {
  /**
   * @class
   * 
   * @description
   * Export all function from aparat.js package.
   * 
   * @example
   * ```js
   * const { API } = require("aparat.js");
   * const api = new API();
   * ```
   */
  API: class API {
    user: User;
    video: Video;
    constructor() {
      this.user = new User();
      this.video = new Video();
    };

    /**
     * 
     * @param {string} username 
     * 
     * @description
     * Check the user is on stream or not.
     * 
     * If user doesn't on a stream nothing happend.
     * 
     * @example
     * ```js
     * api.checkStream("shervinbdndev");
     * api.once("streamStart", async (user) => {
     *  console.log("User is on the stream: ", user.live.url);
     * });
     * ```
     */
    // checkStream(username: string) {
    //   let user;
    //   let name = "streamStart";
    //   this.once(name, async () => {
    //     user = await this.user.search(username);
    //     if (user.live.is_live) {
    //       this.emit(name, user);
    //       return user;
    //     };
    //   });
    //   this.emit(name, user);
    // }
  } 
};
/**
 * @copyright
 * Coded by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * @copyright
 * Work for Persian Caesar | https://dsc.gg/persian-caesar
 * @copyright
 * Please Mention Us "Persian Caesar", When Have Problem With Using This Code!
 * @copyright
 */