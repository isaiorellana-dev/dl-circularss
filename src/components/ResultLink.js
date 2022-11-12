import { useEffect, useState } from "react"
import { links } from "../data/data"
import "../styles/ResultLink.scss"
import { CopyToClipboard } from "react-copy-to-clipboard"

const ResultLink = ({ store, setStore }) => {
  const [short, setShort] = useState("")

  useEffect(() => {
    links.filter(
      (dlStore) =>
        dlStore.url_dynamic_link.slice(10) === store &&
        setShort(`https://api.circularss.com/dl/${dlStore.short_name}`)
    )
  }, [store])

  const text = () => {
    if (store.length > 0 && short.length > 1) {
      return short
    } else if (store.length > 0 && short.length < 1) {
      return "No hay enlace para mostrar"
    } else {
      return "https://api.circularss..."
    }
  }

  return (
    <div className="result">
      {short.length > 0 && <p>Click en el enlace para copiar</p>}
      <CopyToClipboard
        text={short}
        onCopy={() => {
          setShort("")
          setStore("")
        }}
      >
        <span>{text()}</span>
      </CopyToClipboard>
    </div>
  )
}

export default ResultLink
