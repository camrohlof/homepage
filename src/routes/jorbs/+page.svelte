<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;

	type Job = {
		role: string;
		company: string;
		status: JobStatus;
		applicationDate: Date;
		lastUpdate: Date;
	};

	type JobStatus = 'Applied' | 'Rejected' | 'Ghosted';
	const jobs: Job[] = data.jobs;

	const modalStore = getModalStore();

	const confirmModal: ModalSettings = {
		type: 'confirm',
		title: 'Please Confirm',
		body: 'This action is not reversable. Are you sure you wish to proceed?',
		response: (r: boolean) => console.log('response:', r)
	};

	const newAppModal: ModalSettings = {
		type: 'component',
		component: 'NewAppModal'
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
					<th>Status</th>
					<th>Application Date</th>
					<th>Last Update</th>
					<th class="table-cell-fit" />
				</tr>
			</thead>
			<tbody>
				{#each jobs as row}
					<tr>
						<td>{row.role}</td>
						<td>{row.company}</td>
						<td>{row.status}</td>
						<td>{row.applicationDate}</td>
						<td>{row.lastUpdate}</td>
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
		<button class="btn btn-sm variant-filled" on:click={() => modalStore.trigger(newAppModal)}
			>New Application</button
		>
	</div>
</div>
