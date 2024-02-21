

export function valueOf(id: string): string {

    const elem = document.querySelector(`#${id}`) as HTMLInputElement | HTMLTextAreaElement

    return elem.value

}

export function insertSpacesAtCursor(textarea: HTMLTextAreaElement, spaces: string) {
    const cursorPosition = textarea.selectionStart;

    const textBeforeCursor = textarea.value.substring(0, cursorPosition);
    const textAfterCursor = textarea.value.substring(cursorPosition);

    const newText = textBeforeCursor + spaces + textAfterCursor;

    textarea.value = newText;

    const newCursorPosition = cursorPosition + spaces.length;
    textarea.setSelectionRange(newCursorPosition, newCursorPosition);

    textarea.dispatchEvent(new Event('input'));
}

export const resetInputs = (inputsId: string[]) => {
    for (let id of inputsId) {
        const input = document.querySelector(id) as HTMLInputElement
        input.value = ''
    }
}

export const getMultipleValues = (elemIds: string[]) => {
    const values = []
    for (let id of elemIds) {
        const elem = document.querySelector(id) as any
        elem.value ? values.push( elem.value ) : console.clear()
    }
    return values
}
