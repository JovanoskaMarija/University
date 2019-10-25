import React from 'react';
import { withBaseIcon } from 'react-icons-kit'
import {paw} from 'react-icons-kit/fa/paw';
import {plusCircle} from 'react-icons-kit/fa/plusCircle'
import {tshirt} from 'react-icons-kit/ionicons/tshirt'
import {u1F354} from 'react-icons-kit/noto_emoji_regular/u1F354'
import {u2615} from 'react-icons-kit/noto_emoji_regular/u2615'
import {u1F3B8} from 'react-icons-kit/noto_emoji_regular/u1F3B8'
import {menu4} from 'react-icons-kit/icomoon/menu4'

const IconContainer = 
withBaseIcon({ size: "100%", style:{width: 40, height: 40} })

export const IconPaw = () => <IconContainer icon={paw} />
export const IconAdd = () => <IconContainer icon={plusCircle} />
export const IconTshirt = () => <IconContainer icon={tshirt} /> 
export const IconHamburger = () => <IconContainer icon={u1F354} />
export const IconCafe = () => <IconContainer icon={u2615} />
export const IconGuitar = () => <IconContainer icon={u1F3B8} />
export const IconMenu = () => <IconContainer icon={menu4} />
