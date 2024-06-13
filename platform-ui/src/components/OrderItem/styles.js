import styled from 'styled-components'

const statusColor = {
  Pending: 'black',
  'In Progress': '#01579b',
  Finished: '#43a047'
}

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 90px;
`

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${(props) => props.alignItems};
  height: 100%;
`

export const StatusElement = styled.div`
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  font-size: 14px;
  color: white;
  background: ${(props) => statusColor[props.status] || '#f9a825'};
`
