import styled from 'styled-components';

export default styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 50px 1fr;

  .collectablesHeader {
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding: 0 20px;

    .colectionList {
      display: flex;
      align-items: center;

      .collectionItem {
        background-color: var(--grey-color);
        border: 2px solid var(--grey-color);
        padding: 5px 30px;
        margin-right: 2px;
        color: var(--primary-color);
        font-weight: 700;
        cursor: pointer;

        &:last-child {
          margin-right: 0;
        }
      }

      .selected {
        border: 2px solid var(--grey-color);
        background-color: white;
        color: var(--strong-color);
      }
    }
    
    .total {
      align-self: center;
      padding: 5px 25px;
      background-color: var(--grey-color);
      color: var(--strong-color);
      font-weight: 700;
    }
  }

  .collectableContent {
    display: flex;

    .listWrapper {
      width: 70%;
      overflow-y: auto;

      .list {
        display: grid;
        height: ${props => props.height};
        grid-template-columns: repeat(5, 1fr);

        .listItem {
          list-style-type: none;

          img {
            width: 90px;
            height: 90px;
          }
        }
      }
    }

    .selectWrapper {
      width: 30%;
      min-width: 300px;
    }
  }
`;