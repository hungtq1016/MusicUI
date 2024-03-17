import type { TMenu } from "@/types/type";
import { Cog6ToothIcon, HomeIcon, MusicalNoteIcon, Square3Stack3DIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";

export const target = ref(null)

export const menus: TMenu[] = [
    {
        name: "navigation.menu",
        menuItems: [
            {
                icon: HomeIcon,
                label: "navigation.dashboard",
                route: "/",
                children: [
                    {
                        label: "navigation.chart",
                        route: "/",
                    }
                ]
            },
            {
                icon: MusicalNoteIcon,
                label: "navigation.audio",
                route: "/audios"
            },
            {
                icon: Square3Stack3DIcon,
                label: "navigation.collection",
                route: "/collections"
            }
        ]
    },
    {
        name: "navigation.other",
        menuItems: [
            {
                icon: Cog6ToothIcon,
                label: "navigation.setting",
                route: "/pages/settings"
            }
        ]
    }
]