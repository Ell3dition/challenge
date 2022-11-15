import React, { useState } from 'react'
import { ButtonPagination, ContainerPagination, Li, Ul } from './styles'

export const Pagination = () => {
    console.log("Render Pagination")
    const handleStartAgain = (event) => {
        console.log(event.target)
    }

    const handlePrevious = (event) => {
        console.log(event.target)
    }

    const handleNext = (event) => {
        console.log(event.target)
    }

    const handleFinish = (event) => {
        console.log(event.target)
    }

    const handleClickPagination = (event) => {
        console.log(event.target)
    }


    return (
        <ContainerPagination>
            <nav>
                <Ul>
                    <Li>
                        <ButtonPagination onClick={handleStartAgain} active={false} disabled={true}>
                            &laquo;
                        </ButtonPagination>
                    </Li>
                    <Li>
                        <ButtonPagination onClick={handlePrevious} active={false} disabled={true}>
                            &lt;
                        </ButtonPagination>
                    </Li>
                    <Li><ButtonPagination onClick={handleClickPagination}  active={true}  disabled={false}>1</ButtonPagination></Li>
                    <Li><ButtonPagination onClick={handleClickPagination}  active={false} disabled={false}>2</ButtonPagination></Li>
                    <Li><ButtonPagination onClick={handleClickPagination}  active={false} disabled={false}>3</ButtonPagination></Li>
                    <Li>
                        <ButtonPagination onClick={handleNext} active={false} disabled={false}>
                            &gt;
                        </ButtonPagination>
                    </Li>
                    <Li>
                        <ButtonPagination onClick={handleFinish} active={false} disabled={false}>
                            &raquo;
                        </ButtonPagination>
                    </Li>
                </Ul>
            </nav>
        </ContainerPagination>
    )
}
