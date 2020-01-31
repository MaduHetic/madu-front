import React from 'react';
import SearchInput from "./input";
import { TopBar, SearchWrapper} from "./style";

export default function SearchBar() {
    return (
        <TopBar>
            <SearchWrapper>
                <SearchInput></SearchInput>
            </SearchWrapper>
        </TopBar>
    )
}