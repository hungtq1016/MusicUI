import { HomeIcon, MusicalNoteIcon, Square3Stack3DIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';


const navigation = ref([
  { name: 'navigation.dashboard', to: '/', icon: HomeIcon, current: true },
  { name: 'navigation.songs', to: '/songs', icon: MusicalNoteIcon, current: false },
  { name: 'navigation.albums', to: '/albums', icon: Square3Stack3DIcon, current: false },
])

const click = (index: number) => {
    navigation.value.forEach((element, i) => {
        if (i !== index) {
            navigation.value[i].current = false
        }
    })
    navigation.value[index].current = true

}
export { navigation, click }