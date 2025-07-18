
import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {structureTool, StructureBuilder, ListItemBuilder} from 'sanity/structure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import { HomeIcon,CalendarIcon} from '@sanity/icons'

import { GiNewspaper } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { FaMusic } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";
import { IoMdImages } from "react-icons/io";
import { BiSolidBookContent } from "react-icons/bi";
import { Ri24HoursFill, RiTeamLine } from "react-icons/ri";
import Logo from "./components/Logo"

const devOnlyPlugins = [getStartedPlugin()]



const singletonListItem = (
  S:any,
  typeName:string,
  title:string
) =>
  S.listItem()
    .title(title || typeName)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName))

export default defineConfig({
  name: 'default',
  title: 'sawuri-backoffice',

  projectId: 'dl90k7aq',
  dataset: 'production',
  icon:Logo,

  plugins: [
   
    structureTool({
  structure: (S, context) =>
    S.list()
      .title('Content')
      .items([
        // 📰 Actualités
        S.listItem()
          .title('Actualités')
          .schemaType('news')
          .icon(CalendarIcon)
            .child(
            S.documentTypeList('news').title('Actualités Sawuri')
          ),

        S.divider(),

        // 📷 Gallerie, 🎵 Sons, 🎥 Vidéos
        orderableDocumentListDeskItem({
          type: 'gallery',
          title: 'Galerie',
          icon: IoMdImages,
          S,
          context,
        }),

        orderableDocumentListDeskItem({
          type: 'sons',
          title: 'Sons',
          icon: FaMusic,
          S,
          context,
        }),

        orderableDocumentListDeskItem({
          type: 'video',
          title: 'Vidéos',
          icon: IoVideocam,
          S,
          context,
        }),

        S.divider(),

        // 🏠 Singleton marketing page
        singletonListItem(S, 'Marketing', 'Home Page').icon(HomeIcon),

        // 📚 Biographie
        orderableDocumentListDeskItem({
          type: 'contenu',
          title: 'Biographie',
          icon: BiSolidBookContent,
          S,
          context,
        }),

        // 👥 Musiciens / Collaborateurs
        orderableDocumentListDeskItem({
          type: 'team',
          title: 'Musiciens / Collaborateurs',
          icon: RiTeamLine,
          S,
          context,
        }),
        S.divider(),
         // 📧 Template mail
        S.listItem()
          .title('Template mail')
          .schemaType('mail')
          .icon(IoIosMail)
          .child(
            S.documentTypeList('mail').title('Template mail')
          ),

        // ⚖️ Mentions légales
        S.listItem()
          .title('Mentions légales')
          .schemaType('policy')
            .child(
              S.documentTypeList('policy').title('Mentions légales')
            ),


      ]),

})
    
    ,deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

