import React from 'react'
import { UserIcon, BellIcon, XIcon, RefreshIcon} from '@heroicons/react/solid'
import { Menu } from '@headlessui/react'
import { Listbox } from '@headlessui/react'
import { useState } from 'react'

import KTLogo from '../static/image/KT_Logo.svg.png'

const people = [
  { id: 1, name: '전체', unavailable: false },
  { id: 2, name: 'Test-project1', unavailable: false },
  
]
function MyListbox() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button>{selectedPerson.name}</Listbox.Button>
      <Listbox.Options>
        {people.map((person) => (
          <Listbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
          >
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
export default function Header() {
  return (
    <div class="flex flex-row h-16 justify-between bg-black text-white items-center">
        <div class="flex flex-row space-x-3">
            <img src={KTLogo} width='40' height='18'/>
            <div className="text-3xl font-bold"> HCMP </div>
            <XIcon className="w-8 h-8 text-white hover:text-violet-200"/>
            <div className="flex flex-col">
            
              <Menu>
                <Menu.Button>Projects</Menu.Button>
                <Menu.Items>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active && 'bg-blue-500'}`}
                        href="/account-settings"
                      >
                        test-project
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active && 'bg-blue-500'}`}
                        href="/account-settings"
                      >
                        test-project2
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div> 
            <div className="flex flex-col items-center ">
              <MyListbox>
              </MyListbox>
            </div>
            
            <div className="text-sm">최근 자원 동기화</div>
            <div className="text-sm"> 2022-02-23 12:10:15 현재</div>
            <RefreshIcon class="w-6 h-6"></RefreshIcon>
        </div>
        
        <div class="flex flex-row space-x-2">
          <div class="flex flex-col">
          <Menu>
                  <Menu.Button>Provider</Menu.Button>
                  <Menu.Items>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${active && 'bg-blue-500'}`}
                          href="/account-settings"
                        >
                          KT
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${active && 'bg-blue-500'}`}
                          href="/account-settings"
                        >
                          AWS
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${active && 'bg-blue-500'}`}
                          href="/account-settings"
                        >
                          Azure
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
            </Menu>
            </div>
            <div>
            <BellIcon class="w-7 h-7"></BellIcon>
            </div>
            <div className="flex flex-row"> 
              <UserIcon class="w-7 h-7"></UserIcon>Account</div>
        </div>
    </div>
  )
}
