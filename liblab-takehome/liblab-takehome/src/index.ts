import { Base } from "./components/base";
import { Quotes } from "./components/paths/quotePaths";
import { Movies } from "./components/paths/moviePaths";
import { applyMixins } from "./components/utils";

class TheOneSDK extends Base { }
interface TheOneSDK extends Movies, Quotes { }

applyMixins(TheOneSDK, [Movies, Quotes]);

export default TheOneSDK;