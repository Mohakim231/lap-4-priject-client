import React from 'react'
import './style.css'

function TipCard() {
  return (
    <div>
        <div className="tips-filters">
            <ul className="tips-list">
                <button>
                   dogs 
                </button>
                <button>
                   cats 
                </button>
                <button>
                   birds 
                </button>
                <button>
                   fish 
                </button>
                <button>
                   reptiles 
                </button>
                <button>
                   hamsters 
                </button>
                <button>
                   guinea pigs 
                </button>
            </ul>
        </div>
    </div>
  )
}

export default TipCard