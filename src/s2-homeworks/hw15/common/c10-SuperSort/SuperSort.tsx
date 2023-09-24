import React from 'react'
import downIconSVG from '../../images/downIcon.svg'
import upIconSVG from '../../images/upIcon.svg'
import upDownSVG from '../../images/upDownIcon.svg'

const downIcon = downIconSVG
const upIcon = upIconSVG
const noneIcon = upDownSVG

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) {
        return up
    } else if (sort === up) {
        return ''
    } else {
        return down
    }

}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >

            <img
                id={id + '-icon-' + sort}
                src={icon}
                style={{marginLeft: '5px',width:'20px',height:'17px'}}
            />

        </span>
    )
}

export default SuperSort
