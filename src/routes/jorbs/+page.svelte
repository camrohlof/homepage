<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	export let data: PageData;

	const jobs = data.jobs;

	const modalStore = getModalStore();

	const confirmModal: ModalSettings = {
		type: 'confirm',
		title: 'Please Confirm',
		body: 'This action is not reversable. Are you sure you wish to proceed?',
		response: (r: boolean) => console.log('response:', r)
	};
</script>

<div class="flex flex-col gap-4 place-items-center pt-4">
	<h2 class="h2">Jorbs</h2>
	<div class="table-container max-w-screen-lg">
		<table class="table table-interactive">
			<thead>
				<tr>
					<th>Role</th>
					<th>Company</th>
					<th class="table-cell-fit" />
				</tr>
			</thead>
			<tbody>
				{#each jobs as row}
					<tr>
						<td>{row.role}</td>
						<td>{row.company}</td>
						<td class="table-cell-fit">
							<button
								class="btn btn-sm variant-filled-error"
								on:click={() => modalStore.trigger(confirmModal)}>Delete</button
							>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
		<div class="h-4" />
		<button class="btn btn-sm variant-filled">New Application</button>
	</div>
</div>
