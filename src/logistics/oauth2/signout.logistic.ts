import router from "@/router";
import { useAuthInfo } from "@/utils/helpers/indexedDB.helper";
import { getPath } from "@/utils/utils/url.util";

export const signout = async () => {
    const { deleteAuthAsync } = useAuthInfo();
    const result = await deleteAuthAsync();
    if (result) {
        await router.push(getPath("oauth2.index"));
    }
}