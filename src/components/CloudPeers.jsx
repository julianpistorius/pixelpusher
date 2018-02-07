import React from 'react'

const CloudPeers = (props) => {
  return (
    <div className="cloud-peers">
      <h3>Cloud Peers</h3>
      <ul>
        <li><span className="green" />Jim's Server</li>
        <li><span className="red" />Jeff's Server</li>
      </ul>
      <button className="cloud-peers__add-button"
              onClick={props.onAdd}>
        Add Cloud Peer
      </button>
    </div>
  )
}

export default CloudPeers