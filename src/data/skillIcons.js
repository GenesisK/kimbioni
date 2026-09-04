import {
  SiPython,
  SiSelenium,
  SiSqlite,
  SiGit,
  SiJson,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
} from 'react-icons/si'
import { TbRobot, TbTerminal2, TbDatabase, TbServer2 } from 'react-icons/tb'
import { MdApi } from 'react-icons/md'
import { VscTerminalPowershell } from 'react-icons/vsc'

// Nem toda tecnologia tem um logo oficial disponível no pacote de ícones
// (ex.: PyAutoGUI, AutoIt, Oracle, PowerShell, SQL como linguagem, APIs REST)
// — nesses casos, um ícone genérico representativo é usado no lugar.
export const skillIcons = {
  Python: { Icon: SiPython, color: '#3776AB' },
  PyAutoGUI: { Icon: TbRobot, color: '#ECDFCC' },
  Selenium: { Icon: SiSelenium, color: '#43B02A' },
  AutoIt: { Icon: TbTerminal2, color: '#ECDFCC' },
  PowerShell: { Icon: VscTerminalPowershell, color: '#5391FE' },
  SQL: { Icon: TbDatabase, color: '#ECDFCC' },
  Oracle: { Icon: TbServer2, color: '#F80000' },
  SQLite: { Icon: SiSqlite, color: '#3FA7D6' },
  Git: { Icon: SiGit, color: '#F05032' },
  'APIs REST': { Icon: MdApi, color: '#ECDFCC' },
  JSON: { Icon: SiJson, color: '#ECDFCC' },
  React: { Icon: SiReact, color: '#61DAFB' },
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  HTML: { Icon: SiHtml5, color: '#E34F26' },
  CSS: { Icon: SiCss, color: '#1572B6' },
}
