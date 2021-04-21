import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

export default function BoardModal({ open, setOpen, movie }) {
	return (
		<Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
			<Modal.Header>{movie.title}</Modal.Header>
			<Modal.Content image>
				<Image size="huge" src={movie.medium_cover_image} wrapped />
				<Modal.Description>
					<Header>{movie.title}</Header>
					<p>{movie.description_full}</p>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button color="black" onClick={() => setOpen(false)}>
					Close
				</Button>
			</Modal.Actions>
		</Modal>
	)
}
